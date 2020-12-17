import consumer from "./consumer";
import { scrollToBottom } from "./../packs/application";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $("#chatroom-messages").append(data.message_node);
    scrollToBottom(".chatroom__messages-wrapper");
    $("#chatroom-submit").val("");
  },
});
