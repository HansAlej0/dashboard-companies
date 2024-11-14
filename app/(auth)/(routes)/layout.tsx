export default function LayoutAuth({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <p>Dev Hans</p>
            <h1 className="text-3xl my-2">
                Welcome to my Dashboard!
            </h1>
            <h2 className="text-2xl mb-3">HansDashboard</h2>
            {children}
        </div>
    );
}
