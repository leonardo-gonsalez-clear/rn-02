import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Platform } from "react-native"

const api = axios.create({
  baseURL: Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*"
  }

})

const apiAuth = axios.create({
  baseURL: Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${(async () => { return await AsyncStorage.getItem("token") })()}`
  }
})

export { api, apiAuth }

