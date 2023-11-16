import Logo from "@/components/logo";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className=" bg-accent py-8">
      <div className="flex flex-1 flex-col py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mx-auto">
            <Logo />
            <h2>Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className=" px-6 py-12 shadow sm:rounded-lg sm:px-12 bg-background">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium leading-6">
                  Password
                </Label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-6 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="remember-me" className="ml-3 block text-sm leading-6">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm leading-6">
                  <a href="#" className="font-semibold text-primary hover:text-primary">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center"
                >
                  Sign in
                </Button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-background px-6">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <TwitterIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6">Twitter</span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                >
                  <GithubIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-primary/30">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-primary hover:text-primary-foreground">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
