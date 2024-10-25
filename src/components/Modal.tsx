'use client';

import {useEffect, useState} from 'react';
import {Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose} from '@radix-ui/react-dialog';
import {IoMdClose} from 'react-icons/io'; 

const ResponsiveModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                <div className="relative bg-white rounded-lg p-4 sm:p-6 md:p-8 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[90vh] overflow-y-auto shadow-lg">
                    <DialogClose asChild>
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <IoMdClose size={24} />
                        </button>
                    </DialogClose>

                    <DialogTitle className="text-lg md:text-xl font-bold m-4">
                        Welcome to a Crowdsourced "To Be Written" Book for Kids
                    </DialogTitle>
                    <DialogDescription className="text-sm md:text-base">
                        Have you ever seen those YouTube videos where they explain Quantum Computing to a 5-year-old, a
                        college student, and a physicist? We are focusing on the first part here. Our goal is to gather
                        creative ideas from Computer Science enthusiasts worldwide to create the best content for kids
                        and early learners to learn about computing technology.
                        <br />
                        <br />
                        Together, we will develop a syllabus and collaborate to create a simple yet powerful book that
                        introduces complex computing concepts in a way that's easy for young minds to understand.
                        <br />
                        <br />
                        Thanks for checking us out, feel free to check the Github repo where you can make this book
                        platform even better and/or even write chapter of your choice.
                    </DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ResponsiveModal;
