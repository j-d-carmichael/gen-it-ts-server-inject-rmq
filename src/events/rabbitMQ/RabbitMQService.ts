import { QWrapperDomain } from 'q-wrapper';
import { QWrapperSettings } from 'q-wrapper/lib/models';
import { Message as amqMessage } from 'amqplib/callback_api';
import objectReduceByMap from 'object-reduce-by-map';
import picomatch from 'picomatch';
import * as operationIds from './operationIds';
import * as interfaces from './interfaces';

import usersRolesAndPermissionsRolesAllUpdatedReactHandle from '../reactHandles/UsersRolesAndPermissionsRolesAllUpdatedReactHandle';



// OperationID: notifications_sendSystem
export const publishNotificationsSendSystemMap = {fromService: String, jsonString: String, };

// OperationID: usersRolesAndPermissions_permissionsIncomingAllFromOneService
export const publishUsersRolesAndPermissionsPermissionsIncomingAllFromOneServiceMap = {fromService: String, permissions: [ String],};

// OperationID: usersRolesAndPermissions_rolesRequestAll
export const publishUsersRolesAndPermissionsRolesRequestAllMap = {requestTime: String, requestFrom: String, };

export interface RabbitMQServiceSetup extends QWrapperSettings {
  subscribeErrorHandle?: (operationId: string, err: any) => void
}

class RabbitMQService {
  subscribeErrorHandle?: (operationId: string, err: any) => void = undefined

  async setup (settings: RabbitMQServiceSetup): Promise<void> {
    this.subscribeErrorHandle = settings.subscribeErrorHandle
    global.qWrapper = new QWrapperDomain(settings);
    await global.qWrapper.initialize();
    this.subscribe();
    console.log('RabbitMQService.setup completed.')
  }
  setupCheck (): void {
    if (!global.qWrapper) {
      throw new Error('Ensure you call the setup method 1st before calling anything else from this class and call it only once.');
    }
  }

  /**
   * Path: /notifications/send/system publish
   * OperationID: notifications_sendSystem
   * Description:  send, from notifications
   */
  publishNotificationsSendSystem (payload: interfaces.NotificationsSendSystem ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishNotificationsSendSystemMap),
      operationIds.NOTIFICATIONSSENDSYSTEM
    );
    
  }
  /**
   * Path: /users-roles-and-permissions/permissions/incomingAllFromOneService publish
   * OperationID: usersRolesAndPermissions_permissionsIncomingAllFromOneService
   * Description:  permissions, from users-roles-and-permissions
   */
  publishUsersRolesAndPermissionsPermissionsIncomingAllFromOneService (payload: interfaces.UsersRolesAndPermissionsPermissionsIncomingAllFromOneService ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishUsersRolesAndPermissionsPermissionsIncomingAllFromOneServiceMap),
      operationIds.USERSROLESANDPERMISSIONSPERMISSIONSINCOMINGALLFROMONESERVICE
    );
    
  }
  /**
   * Path: /users-roles-and-permissions/roles/requestAll publish
   * OperationID: usersRolesAndPermissions_rolesRequestAll
   * Description:  roles, from users-roles-and-permissions
   */
  publishUsersRolesAndPermissionsRolesRequestAll (payload: interfaces.UsersRolesAndPermissionsRolesRequestAll ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishUsersRolesAndPermissionsRolesRequestAllMap),
      operationIds.USERSROLESANDPERMISSIONSROLESREQUESTALL
    );
    
  }
  wildcardMatch (incomingRoutingKey: string, matchRoutingKey: string) {
    return picomatch.isMatch(incomingRoutingKey, matchRoutingKey) ? incomingRoutingKey : '';
  }

  /**
   * All subscribe events get handled in the respective subscribeHandles
   * Each routing key is the operation id.
   * For any routing key not subscribed to, the item from the is simply marked
   * as processed for the queue this ms is bound to.
   */
  private subscribe (): void {
    global.qWrapper.consume(async (message: amqMessage) => {
      switch (message.fields.routingKey) {
        case this.wildcardMatch(message.fields.routingKey, operationIds.USERSROLESANDPERMISSIONSROLESALLUPDATED): {
          let messageContent = JSON.parse(message.content.toString())
          try {
            await usersRolesAndPermissionsRolesAllUpdatedReactHandle(messageContent, operationIds.USERSROLESANDPERMISSIONSROLESALLUPDATED);
              
            return { processed: true, requeue: false };
          } catch (e) {
            message.content = Buffer.from(JSON.stringify(e));
            if(this.subscribeErrorHandle){
              this.subscribeErrorHandle('usersRolesAndPermissions_rolesAllUpdated', e);
            }
            console.error(operationIds.USERSROLESANDPERMISSIONSROLESALLUPDATED, ' error parsing domain method: ' );
            return { processed: false, requeue: false };
          }
        }

          default:
          return {
            processed: true,
            requeue: false
          };
      }
    });
  }
}

export default new RabbitMQService();
