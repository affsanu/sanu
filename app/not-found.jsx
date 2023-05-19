'use client';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

export default function Custom404() {
    return (
        <div className="flex justify-center items-center py-10 lg:py-24">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="/assets/images/404.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography color="blue" className="font-medium" textGradient>
                        All Page Available In Menu
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Button>Back Home</Button>
                </CardFooter>
            </Card>
        </div>
    );
}