import { Footer, Header } from "@/components";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }) {

    const pathname = usePathname();
    const hiddenPathnames = ["/login", "/register"];
    const hidden = hiddenPathnames.includes(pathname);

    return (
        <>
        {hidden && <Header/>}

        <main>{children}</main>

        {hidden && <Footer/>}
        </>
    )
}