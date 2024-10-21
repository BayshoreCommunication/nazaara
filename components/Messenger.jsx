"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerFbChat = () => {
  return (
    <FacebookProvider appId="1153289488711586" chatSupport>
      <CustomChat pageId="115797558072759" />
    </FacebookProvider>
  );
};
