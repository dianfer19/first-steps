import React  from 'react';
import {Navbar} from "@/components";

 const PublicLayout = ({children,}: { children: React.ReactNode }) => {
 return (
     <>
     <Navbar />
         <main className="flex flex-col items-center p-24">
             <span className="text-lg">PublicLayout</span>
             {children}
         </main>
     </>
 );
};
export default PublicLayout;