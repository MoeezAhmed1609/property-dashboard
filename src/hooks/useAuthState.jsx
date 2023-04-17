import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
export default function useAuthState() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, [])
    return isAuthenticated;
}
