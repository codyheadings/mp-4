import ObjectList from "@/components/object-list";
import Header from "@/components/header";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Browse | Gallery",
};

export default function BrowsePage() {
    return (
        <>
            <Header/>
            <ObjectList/>
        </>
    );
}