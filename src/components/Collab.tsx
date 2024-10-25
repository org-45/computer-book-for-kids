import React from 'react';
import {AiFillGithub} from 'react-icons/ai';

function Collab() {
    return (
        <>
            <div className="hidden md:flex absolute top-4 right-4 flex-col items-end space-y-2 p-2 md:p-4">
                <span className="text-sm md:text-lg text-gray-700 font-semibold text-right">
                    Interested in writing chapters? <br />
                    <span className="text-blue-600">Contribute here!!</span>
                </span>

                <a
                    href="https://github.com/org-45/computer-book-for-kids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-black text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md m-1 text-sm md:text-base">
                    <AiFillGithub className="text-2xl md:text-3xl" />
                    <span>org45</span>
                </a>
            </div>

            <div className="flex md:hidden relative justify-center items-center space-x-2 p-2 bg-gray-100 rounded-sm shadow-md mx-auto ">
                <span className="text-sm text-gray-700">
                    Interested in writing? <span className="text-blue-600">Contribute on GitHub!</span>
                </span>

                <a
                    href="https://github.com/org-45/computer-book-for-kids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 bg-black text-white px-2 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md">
                    <AiFillGithub className="text-xl" />
                </a>
            </div>
        </>
    );
}

export default Collab;