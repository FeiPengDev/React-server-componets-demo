import React, {Suspense, useCallback} from 'react';

export default ({ userName = 'unknown' }: { userName?: string }) => {
    const log = useCallback(() => {
        alert('Hello world');
    }, []);

    return (
        <div>
            <p>react ssr demo</p>
            <Suspense fallback={<p>loading...</p>}>
                <p>{userName}</p>
            </Suspense>
            <button onClick={log}>Click me</button>
        </div>
    );
};
