"use client";

import { useEffect, useRef } from "react";
import { useProxyFormData } from "@store";
import { useFormContext } from "react-hook-form";

export const useProxyCalculate = () => {
    const { setCount, setPeriod, setLocation } = useProxyFormData();
    const form = useFormContext();

    const settersRef = useRef({ setCount, setPeriod, setLocation });

    useEffect(() => {
        settersRef.current = { setCount, setPeriod, setLocation };
    }, [setCount, setPeriod, setLocation]);

    useEffect(() => {
        const subscription = form.watch((values) => {
            const { count, period, location } = values;

            settersRef.current.setCount(count);
            settersRef.current.setPeriod(period);
            settersRef.current.setLocation(location);
        });

        return () => subscription.unsubscribe();
    }, [form]);

    return null;
};
