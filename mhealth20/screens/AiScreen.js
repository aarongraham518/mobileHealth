import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function AiScreen() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const myKey = process.env.KEY;
  
  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const newMessage = { text: inputText, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputText("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputText }],
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myKey}`,
          },
        }
      );

      const reply = response.data.choices[0].message.content.trim();
      setMessages([...messages, newMessage, { text: reply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={
              msg.sender === "user"
                ? [styles.userMessage, styles.chatContainer]
                : [styles.botMessage, styles.chatContainer]
            }
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter your question here..."
        placeholderTextColor="#fff"
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSend}
        disabled={loading}
      >
        <Text style={styles.sendButtonText}>{loading ? "..." : "Send"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 40,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  chatContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#5c7aff",
    color: "white",
    fontSize: 22,
    padding: 10,
    borderTopRightRadius: 'none',
    marginVertical: 2,
    maxWidth: "80%",
    borderColor: "#0af",
    borderWidth: 1,
    marginBottom: 5,
  },  
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#72f17c",
    padding: 10,
    borderTopLeftRadius: 'none',
    marginVertical: 2,
    maxWidth: "80%",
    borderColor: "#0af",
    borderWidth: 1,
    marginBottom: 5,
  },
  messageText:{
    color: "black",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#333",
    paddingTop: 10,
  },
  input: {
    flex: 0.15,
    borderWidth: 1,
    borderColor: "#444",
    padding: 10,
    borderRadius: 20,
    borderTopRightRadius: 0,
    color: "#fff",
    backgroundColor: "#37373a",
    marginRight: 10,
    marginBottom: 5,
    fontSize: 22,
  },
  sendButton: {
    backgroundColor: "#0af",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 80,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
