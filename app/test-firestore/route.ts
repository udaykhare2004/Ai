import { db } from "@/firebase/admin";

export async function GET() {
  try {
    const doc = await db.collection("users").doc("test-doc").get();
    return new Response(JSON.stringify(doc.data()), { status: 200 });
  } catch (e) {
    console.error("Firestore test error:", e);
    return new Response("Error", { status: 500 });
  }
}
