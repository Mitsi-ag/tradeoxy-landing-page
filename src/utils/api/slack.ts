import axios from "axios";
import toast from "react-hot-toast";

export const sendNotification = async (email: string) => {
  try {
    const name = String(email || "Unknown").split("@")[0];
    await axios.post(
      "https://discord.com/api/webhooks/1141548333840740522/ZkGTckAKJSDjin-gTdkUsLSbCzLdE2EzsH3_CGHNzNQih2ZgyqpkD8OnFOuCoZz6JLZ8",
      {
        content: `Early access user through website: ${email}`,

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
