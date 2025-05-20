import React from "react";

export default function ContentPage({ content }: { content: React.ReactNode }) {
  return (
    <div>
      <h1>Welcome to Admin</h1>
      {content}
    </div>
  );
}
