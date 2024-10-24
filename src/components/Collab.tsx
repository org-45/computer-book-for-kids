import React from 'react'
import {AiFillGithub} from 'react-icons/ai'; 

function Collab() {
	return (
        <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
            <span className="text-lg text-gray-700 font-semibold text-right">
                Interested in writing chapters? <br />
                <span className="text-blue-600">Contribute here!!</span>
            </span>

            <a
                href="https://github.com/org-45/computer-book-for-kids"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md m-1">
                <AiFillGithub className="text-3xl" />
                <span className="text-lg">org45</span>
            </a>
        </div>
    );
}

export default Collab