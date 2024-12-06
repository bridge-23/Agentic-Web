'use client'

import { initJuno, signIn, signOut, NFIDProvider } from "@junobuild/core";

export class AuthService {
  static async initialize() {
    try {
      if (typeof window !== 'undefined') {
        await initJuno({
          satelliteId: process.env.NEXT_PUBLIC_SATELLITE_ID!,
        });
      }
    } catch (error) {
      console.error("Failed to initialize Juno:", error);
    }
  }

  static async signIn() {
    try {
      if (typeof window !== 'undefined') {
        await signIn({
          provider: new NFIDProvider({
            appName: "Agentic-Web",
            logoUrl: "https://pbs.twimg.com/profile_images/1858390217679659008/EQ8M5vlR_400x400.jpg",
          }),
        });
      }
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  }

  static async signOut() {
    try {
      if (typeof window !== 'undefined') {
        await signOut();
      }
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  }
}