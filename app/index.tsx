import { DatabaseInitializer } from "@/data/db.config";
import { initilizeTransaction } from "@/store/transaction.store";
import { Redirect } from "expo-router";
import Toast from "react-native-toast-message";
import { Suspense, useEffect, useState } from "react";


export default function Index() {
  const [dbLoaded, setDbLoaded] = useState(false);


  useEffect(() => {
    const initilizeDB = async () => {
      try {
        console.log("Hello!")
        const db = new DatabaseInitializer();
        await db.initialize();
        setDbLoaded(true);
        console.log("Loaded")
        await initilizeTransaction();
      } catch (err) {
        console.log("Error in initilizing database: ", err);
      }
    }

    initilizeDB();
  }, []);

  return (
    <>
      <Toast />
      {dbLoaded ? <Redirect href="/(tabs)/home" /> : <></>}
    </>
  );
}
