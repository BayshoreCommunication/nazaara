"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RouterBack = () => {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, [router]);

  return null;
};

export default RouterBack;
