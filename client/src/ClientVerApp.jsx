import { Section_1 } from "./components/ClientVerApp/Section-1/Section-1"
import { Section_2 } from "./components/ClientVerApp/Section-2/Section-2"
import { Section_3 } from "./components/ClientVerApp/Section-3/Section-3"

export default function ClientVerApp() {
    return (
        <>
            <main className="main">
                <Section_1/>
                <Section_2/>
                <Section_3/>
            </main>
        </>
        
    )
}