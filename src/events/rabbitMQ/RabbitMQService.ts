import { QWrapperDomain } from 'q-wrapper';
import { QWrapperSettings } from 'q-wrapper/lib/models';
import { Message as amqMessage } from 'amqplib/callback_api';
import objectReduceByMap from 'object-reduce-by-map';
import * as operationIds from './operationIds';
import * as interfaces from './interfaces';
import usersRolesAndPermissionsRolesChangedReactHandle from '../reactHandles/UsersRolesAndPermissionsRolesChangedReactHandle';


// OperationID: notificationsSendSystem
export const publishNotificationsSendSystemMap = {fromService: String, jsonString: String, };

// OperationID: usersRolesAndPermissionsPermissionsReceiveAllFromService
export const publishUsersRolesAndPermissionsPermissionsReceiveAllFromServiceMap = {fromService: String, permissions: [ String],};

// OperationID: usersRolesAndPermissionsRolesRequest
export const publishUsersRolesAndPermissionsRolesRequestMap = {requestTime: String, requestFrom: String, };

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
   * OperationID: notificationsSendSystem
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
   * Path: /users-roles-and-permissions/permissions/receiveAllFromService publish
   * OperationID: usersRolesAndPermissionsPermissionsReceiveAllFromService
   * Description:  permissions, from users-roles-and-permissions
   */
  publishUsersRolesAndPermissionsPermissionsReceiveAllFromService (payload: interfaces.UsersRolesAndPermissionsPermissionsUpdateFromService ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishUsersRolesAndPermissionsPermissionsReceiveAllFromServiceMap),
      operationIds.USERSROLESANDPERMISSIONSPERMISSIONSRECEIVEALLFROMSERVICE
    );
    
  }
  /**
   * Path: /users-roles-and-permissions/roles/request publish
   * OperationID: usersRolesAndPermissionsRolesRequest
   * Description:  roles, from users-roles-and-permissions
   */
  publishUsersRolesAndPermissionsRolesRequest (payload: interfaces.UsersRolesAndPermissionsRolesRequestAll ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishUsersRolesAndPermissionsRolesRequestMap),
      operationIds.USERSROLESANDPERMISSIONSROLESREQUEST
    );
    
  }
  /**
   * All subscribe events get handled in the respective subscribeHandles
   * Each routing key is the operation id.
   * For any routing key not subscribed to, the item from the is simply marked
   * as processed for the queue this ms is bound to.
   */
  private subscribe (): void {
    global.qWrapper.consume(async (message: amqMessage) => {
      try{
        switch (message.fields.routingKey) {
            case operationIds.USERSROLESANDPERMISSIONSROLESCHANGED: {
            let messageContent
            try{
              messageContent = JSON.parse(message.content.toString())
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              console.error(operationIds.USERSROLESANDPERMISSIONSROLESCHANGED, ' error parsing JSON: ');
              return { processed: false, requeue: false };
            }
            try {
              await usersRolesAndPermissionsRolesChangedReactHandle(messageContent, operationIds.USERSROLESANDPERMISSIONSROLESCHANGED);
              
              return { processed: true, requeue: false };
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              if(this.subscribeErrorHandle){
                this.subscribeErrorHandle('usersRolesAndPermissionsRolesChanged', e);
              }
              console.error(operationIds.USERSROLESANDPERMISSIONSROLESCHANGED, ' error parsing domain method: ' );
              return { processed: false, requeue: false };
            }
          }
            default:
            return {
              processed: true,
              requeue: false
            };
        }
      } catch (e) {
        message.content = Buffer.from(JSON.stringify(e));
        return { processed: false, requeue: false };
      }
    });
  }
}

export default new RabbitMQService();
