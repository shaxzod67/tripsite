import React, { useState } from "react";
import { Input, Button, Space } from "antd";

const telegramBotId = "6912291123:AAFWaiVrrsv0JaML6_A_1zQxG1uAmhejpj4";
const chatId = 1350512105;

function ContactForm() {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Ismi: ${uName}\nFamilya: ${email}\nSavol: ${messageText}\nTel: ${phone}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        }
      );

      const data = await response.json();
      console.log("Telegram javobi:", data);

      setUName("");
      setEmail("");
      setMessageText("");
      setPhone("");
      alert("Xabaringiz yuborildi ✅");
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xabar yuborishda xatolik yuz berdi ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size={10} style={{ width: "100%" }}>
        <Input
          placeholder="Ismingiz"
          value={uName}
          onChange={(e) => setUName(e.target.value)}
          required
        />
        <Input
          placeholder="Familya"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Savolingiz ?"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required
        />
        <Input
          placeholder="Telfon raqam"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Button type="primary" htmlType="submit">
          Yuborish
        </Button>
      </Space>
    </form>
  );
}

export default ContactForm;
