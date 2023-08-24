import axios from "axios";
import toast from "react-hot-toast";

export const sendNotification = async (email: string) => {
  try {
    const name = String(email || "Unknown").split("@")[0];
    await axios.post(
      "https://discord-user-notification.azurewebsites.net/api/discord-notification?code=eOqBqHK29G7HpKXzyXjrYfBEP2c5H19LArrluAEojbWXAzFur6TuFA==",
      {
        content: email,

      },
    );
    toast.success("User successfully subscribed", {
      style: { fontSize: "1.35rem" },
    });
  } catch (error) {
    toast.error("Something went wrong");
  }
  return {};
};
