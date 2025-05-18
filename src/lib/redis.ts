import "server-only";
import { cookies } from "next/headers";
import Redis from "ioredis";

// Create a new Redis instance
const redis = new Redis(process.env.REDIS_URL!);
