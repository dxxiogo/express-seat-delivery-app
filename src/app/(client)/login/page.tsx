import FilledButton from "@/components/filled-button";
import PlaceholderInput from "@/components/text-field";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center">
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-8 mb-30">
        <img
          src="/assets/logo.png"
          alt="Welcome"
          width={200}
          height={80}
          className="mb-8 mt-2 self-center mr-60"
        />
        <h1 className="text-3xl font-bold mb-8 mt-4 w-full text-left max-w-xl">
          Login
        </h1>

        <PlaceholderInput placeholder="digite seu email" className="mb-8 w-full" />
        <PlaceholderInput placeholder="digite sua senha" className="mb-8 w-full" />

        <div className="flex flex-row gap-4 w-full max-w-full">
          <Link href="/home" className="w-100">
            <FilledButton
              colorClass="bg-red-600 hover:bg-red-700 text-white"
              className="w-full h-16 text-xl cursor-pointer"
            >
              Entrar
            </FilledButton>
          </Link>
          <Link href="/" className="w-100">
            <FilledButton
              colorClass="bg-white hover:bg-red-700 text-red-600 border border-red-600 hover:text-white"
              className="w-full h-16 text-xl cursor-pointer"
            >
              Voltar
            </FilledButton>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="/assets/hamburguer.png"
          alt="Hamburguer"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
