import React from "react";

type AgeCalculatorProps = {
  birthDate: Date; // 生年月日をプロパティとして受け取る
};

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ birthDate }) => {
    const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!isBirthdayPassed) {
        age--;
    }

        return age;
    };

    return <p>{calculateAge(birthDate)}歳です。</p>;
};

export default AgeCalculator;
