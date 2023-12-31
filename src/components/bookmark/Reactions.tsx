import React, { FC } from 'react';
import { bookMarkTypes } from './user-bookmark/UserBookMark';
import IconButton from './user-bookmark/IconButton';

interface ReactionsProps {
    reactions: {
        text: string;
        bookmarkType: bookMarkTypes;
    }[];
    user: {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
    } | null;
    currPageId: number;
}

const Reactions: FC<ReactionsProps> = ({ reactions, user, currPageId }) => {
    return (
        <div className="flex flex-col py-2 items-start gap-3 my-6">
            {reactions.map((reaction, i) => (
                <IconButton
                    user={user}
                    reaction={reaction}
                    currPageId={currPageId}
                    key={i}
                />
            ))}
        </div>
    );
};

export default Reactions;
