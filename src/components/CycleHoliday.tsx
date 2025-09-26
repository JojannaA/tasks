import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Christmas = "Christmas",
        Halloween = "Halloween",
        Day_of_the_Dead = "Day of the Dead",
        Holi = "Holi",
        Diwali = "Diwali",
    }
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    const holiEmojis: Record<Holiday, string> = {
        [Holiday.Christmas]: "🎄",
        [Holiday.Halloween]: "🎃",
        [Holiday.Day_of_the_Dead]: "💀",
        [Holiday.Holi]: "🌈",
        [Holiday.Diwali]: "🪔",
    };

    function nextHolidayByAlphabet() {
        const aplhaOrder = [
            Holiday.Christmas,
            Holiday.Day_of_the_Dead,
            Holiday.Diwali,
            Holiday.Halloween,
            Holiday.Holi,
        ];
        const index1 = aplhaOrder.indexOf(holiday);
        return aplhaOrder[(index1 + 1) % aplhaOrder.length];
    }

    function nextHolidayByDate() {
        const dateOrder = [
            Holiday.Holi,
            Holiday.Diwali,
            Holiday.Halloween,
            Holiday.Day_of_the_Dead,
            Holiday.Christmas,
        ];
        const index2 = dateOrder.indexOf(holiday);
        return dateOrder[(index2 + 1) % dateOrder.length];
    }

    return (
        <div>
            <div>Holiday: {holiEmojis[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(nextHolidayByAlphabet());
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextHolidayByDate());
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
