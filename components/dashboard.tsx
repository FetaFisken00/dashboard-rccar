import { Car } from "lucide-react";
import { Card } from "./ui/card";
export function Dashboard() {
    return (
        <div className="w-full max-w-6xl p-4" style={{height: '100vh'}}>
            <Card style={{height: '100%'}}>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <Card>
                            <p className="text-2xl font-bold">Car</p>
                            <Car size={64} />
                        </Card>

                    </div>
                    <div className="flex flex-col gap-4">
                        <Card>
                            <p className="text-2xl font-bold">Car</p>
                            <Car size={64} />
                        </Card>

                    </div>
                    <Card className="grid gap-4">
                    <p className="text-2xl font-bold">Car</p>
                    </Card>
                </div>
            </Card>
        </div>
    );
};