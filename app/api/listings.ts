import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error(); // Remove the argument from the function call
    }

    try {
        const body = await request.json();
        const { 
            title,
            description,
            imageSrc,
            category,
            roomcount,
            bathroomcount,
            guestCount,
            location,
            price
        } = body;

        // Check if any required fields are missing
        const requiredFields = ['title', 'description', 'imageSrc', 'category', 'roomcount', 'bathroomcount', 'guestCount', 'location', 'price'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.error(); // Remove the argument from the function call
            }
        }

        // Create listing in the database
        const listing = await prisma.listing.create({
            data: {
                title,
                description,
                imageSrc,
                category,
                roomcount, 
                bathroomcount,
                guestCount,
                locationValue: location.value,
                price: parseInt(price, 10),
                userId: currentUser.id  
            }
        });

        return NextResponse.json(listing);
    } catch (error) {
        console.error("Error creating listing:", error);
        return NextResponse.error(); // Remove the argument from the function call
    }
}
