import React from "react";

const Journal =({journals}) => {
    return(
        <div>
            {journals.map((journal) => {
                return(
                    <div key={journal.id}>
                    <div as="h4" aling="center">
                        {journal.title}
                    </div>

                    <div aling="center">
                        {journal.body}
                    </div>

                </div>
                );
            })}
        </div>
    );
};

export default Journal;