import { FC } from "react";

export const Certifications: FC = () => {
    return(
        <div className="mt-20 flex flex-col">
            <span className="text-2xl text-white flex justify-center">Certifications</span>
            <div className="grid grid-cols-2 gap-3 mt-10">
                <img src="/Nascomm_Certificate.png" alt="Nasscom certification"/>
                <img src="/NN_DL.png" alt="Neural networks and deep learning certification"/>
                <img src="/Adjudicator_Sansad.jpg" alt="Sansad adjudicator certificate"/>
                <img src="/Sansad_Head_of_Registrations.jpg" alt="Sansad head of registrations certificate"/>

            </div>
        </div>
    );
}
