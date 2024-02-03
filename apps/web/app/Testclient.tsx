'use client';

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Testclient() {
    const [data, setData] = useState('');

    useEffect(() => {
        trpc.test.query({name: "clientSide name"}).then((res) => {
            setData(res);
        });

    })

    return (
        <div>Client side test: {data}</div>
    );
}
