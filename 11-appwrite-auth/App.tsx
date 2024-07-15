import { AppwriteProvider } from "@/appwrite/AppwriteContext";
import Router from "@/routes/Router";
import React from "react";

export default function App() {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
}
