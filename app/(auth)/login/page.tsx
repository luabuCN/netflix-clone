import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Github } from "lucide-react";
import GoogleIcon from "@/public/google.svg";
import Image from "next/image";
export default function Login() {
  return (
    <div className=" mt-24px rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">登录</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="请输入邮箱"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button variant={"destructive"} className=" w-full bg-[#e50914]">
            登录
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-4">
        没有账户？
        <Link href="/sign-up" className="text-white hover:underline">
          现在注册
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <Github className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="google" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
