import { QWrapperDomain } from 'q-wrapper';
import { QWrapperSettings } from 'q-wrapper/lib/models';
import { Message as amqMessage } from 'amqplib/callback_api';
import objectReduceByMap from 'object-reduce-by-map';
import * as operationIds from './operationIds';
import * as interfaces from './interfaces';
import msRolesPermissionsRequestPublishReactHandle from '../reactHandles/MsRolesPermissionsRequestPublishReactHandle';
import msRolesPermissionsRolesChangedPublishReactHandle from '../reactHandles/MsRolesPermissionsRolesChangedPublishReactHandle';


// OperationID: msNotificationEmailTransactionalHttpExceptionPublish
export const publishMsNotificationEmailTransactionalHttpExceptionPublishMap = {service: String, err: String, stack: String, };

// OperationID: msRolesPermissionsReceivePublish
export const publishMsRolesPermissionsReceivePublishMap = {fromService: String, permissions: [ String],};

// OperationID: msRolesPermissionsRolesRequestPublish
export const publishMsRolesPermissionsRolesRequestPublishMap = {fromService: String, };

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
   * Path: /ms-notification/email/transactional/httpException publish
   * OperationID: msNotificationEmailTransactionalHttpExceptionPublish
   * Description: A http exception was thrown, auto-email system
   */
  publishMsNotificationEmailTransactionalHttpExceptionPublish (payload: interfaces.MsNotificationEmailHttpException ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishMsNotificationEmailTransactionalHttpExceptionPublishMap),
      operationIds.MSNOTIFICATIONEMAILTRANSACTIONALHTTPEXCEPTIONPUBLISH
    );
    
  }
  /**
   * Path: /ms-roles-permissions/receive publish
   * OperationID: msRolesPermissionsReceivePublish
   * Description: Accepts a new set of permissions
   */
  publishMsRolesPermissionsReceivePublish (payload: interfaces.MsRolesPermissionsPermissions ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishMsRolesPermissionsReceivePublishMap),
      operationIds.MSROLESPERMISSIONSRECEIVEPUBLISH
    );
    
  }
  /**
   * Path: /ms-roles-permissions/rolesRequest publish
   * OperationID: msRolesPermissionsRolesRequestPublish
   * Description: Requests the roles cache to be emitted
   */
  publishMsRolesPermissionsRolesRequestPublish (payload: interfaces.MsRolesPermissionsRequest ): void {
    this.setupCheck();
    global.qWrapper.sendToExchange(
      objectReduceByMap(payload, publishMsRolesPermissionsRolesRequestPublishMap),
      operationIds.MSROLESPERMISSIONSROLESREQUESTPUBLISH
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
            case operationIds.MSROLESPERMISSIONSREQUESTPUBLISH: {
            let messageContent
            try{
              messageContent = JSON.parse(message.content.toString())
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              console.error(operationIds.MSROLESPERMISSIONSREQUESTPUBLISH, ' error parsing JSON: ', e);
              return { processed: false, requeue: false };
            }
            try {
              await msRolesPermissionsRequestPublishReactHandle(messageContent, operationIds.MSROLESPERMISSIONSREQUESTPUBLISH);
              
              return { processed: true, requeue: false };
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              if(this.subscribeErrorHandle){
                this.subscribeErrorHandle('msRolesPermissionsRequestPublish', e);
              }
              console.error(operationIds.MSROLESPERMISSIONSREQUESTPUBLISH, ' error parsing domain method: ', e);
              return { processed: false, requeue: false };
            }
          }
            case operationIds.MSROLESPERMISSIONSROLESCHANGEDPUBLISH: {
            let messageContent
            try{
              messageContent = JSON.parse(message.content.toString())
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              console.error(operationIds.MSROLESPERMISSIONSROLESCHANGEDPUBLISH, ' error parsing JSON: ', e);
              return { processed: false, requeue: false };
            }
            try {
              await msRolesPermissionsRolesChangedPublishReactHandle(messageContent, operationIds.MSROLESPERMISSIONSROLESCHANGEDPUBLISH);
              
              return { processed: true, requeue: false };
            } catch (e) {
              message.content = Buffer.from(JSON.stringify(e));
              if(this.subscribeErrorHandle){
                this.subscribeErrorHandle('msRolesPermissionsRolesChangedPublish', e);
              }
              console.error(operationIds.MSROLESPERMISSIONSROLESCHANGEDPUBLISH, ' error parsing domain method: ', e);
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
