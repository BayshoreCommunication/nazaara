"use client";

import { useEffect } from "react";

const MessengerChat = () => {
  useEffect(() => {
    // Load Facebook SDK for Messenger Chat
    const loadMessengerChat = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v15.0",
        });
      };

      // Dynamically load the SDK
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"; // Correct URL
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    };

    loadMessengerChat();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script>
        {`var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "115797558072759");
        chatbox.setAttribute("app_id", "1153289488711586");
        chatbox.setAttribute("attribution", "biz_inbox");`}
      </script>
    </>
  );
};

export default MessengerChat;
