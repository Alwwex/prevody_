import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Button } from "@mui/material";

const distanceConversions = {
  "m": { "cm": 100, "mm": 1000, "km": 0.001 },
  "cm": { "m": 0.01, "mm": 10, "km": 0.00001 },
  "mm": { "m": 0.001, "cm": 0.1, "km": 0.000001 },
  "km": { "m": 1000, "cm": 100000, "mm": 1000000 }
};

const weightConversions = {
  "kg": { "g": 1000, "mg": 1000000, "t": 0.001 },
  "g": { "kg": 0.001, "mg": 1000, "t": 0.000001 },
  "mg": { "kg": 0.000001, "g": 0.001, "t": 0.000000001 },
  "t": { "kg": 1000, "g": 1000000, "mg": 1000000000 }
};

const energyConversions = {
  "J": { "kJ": 0.001, "MJ": 0.000001, "GJ": 0.000000001 },
  "kJ": { "J": 1000, "MJ": 0.001, "GJ": 0.000001 },
  "MJ": { "J": 1000000, "kJ": 1000, "GJ": 0.001 },
  "GJ": { "J": 1000000000, "kJ": 1000000, "MJ": 1000 }
};

const speedConversions = {
  "m/s": { "km/h": 3.6 },
  "km/h": { "m/s": 1 / 3.6 }
};

export default function UnitConverter() {
  const [inputValueDist, setInputValueDist] = useState("");
  const [fromUnitDist, setFromUnitDist] = useState("m");
  const [toUnitDist, setToUnitDist] = useState("cm");
  const [resultDist, setResultDist] = useState(null);

  const [inputValueWeight, setInputValueWeight] = useState("");
  const [fromUnitWeight, setFromUnitWeight] = useState("kg");
  const [toUnitWeight, setToUnitWeight] = useState("g");
  const [resultWeight, setResultWeight] = useState(null);

  const [inputValueEnergy, setInputValueEnergy] = useState("");
  const [fromUnitEnergy, setFromUnitEnergy] = useState("J");
  const [toUnitEnergy, setToUnitEnergy] = useState("kJ");
  const [resultEnergy, setResultEnergy] = useState(null);

  const [inputValueSpeed, setInputValueSpeed] = useState("");
  const [fromUnitSpeed, setFromUnitSpeed] = useState("m/s");
  const [toUnitSpeed, setToUnitSpeed] = useState("km/h");
  const [resultSpeed, setResultSpeed] = useState(null);

  const convertDistance = () => {
    if (inputValueDist === "" || isNaN(inputValueDist)) return;
    const conversionRate = distanceConversions[fromUnitDist]?.[toUnitDist] || 1;
    setResultDist((inputValueDist * conversionRate).toLocaleString());
  };

  const convertWeight = () => {
    if (inputValueWeight === "" || isNaN(inputValueWeight)) return;
    const conversionRate = weightConversions[fromUnitWeight]?.[toUnitWeight] || 1;
    setResultWeight((inputValueWeight * conversionRate).toLocaleString());
  };

  const convertEnergy = () => {
    if (inputValueEnergy === "" || isNaN(inputValueEnergy)) return;
    const conversionRate = energyConversions[fromUnitEnergy]?.[toUnitEnergy] || 1;
    setResultEnergy((inputValueEnergy * conversionRate).toLocaleString());
  };

  const convertSpeed = () => {
    if (inputValueSpeed === "" || isNaN(inputValueSpeed)) return;
    const conversionRate = speedConversions[fromUnitSpeed]?.[toUnitSpeed] || 1;
    setResultSpeed((inputValueSpeed * conversionRate).toLocaleString());
  };

  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <Card className="p-6 w-96">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Převod vzdálenosti</h2>
          <TextField
            type="number"
            placeholder="Zadejte hodnotu"
            value={inputValueDist}
            onChange={(e) => setInputValueDist(e.target.value)}
            fullWidth
          />
          <div className="flex gap-2">
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={fromUnitDist} onChange={(e) => setFromUnitDist(e.target.value)}>
                {Object.keys(distanceConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <span className="self-center">→</span>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={toUnitDist} onChange={(e) => setToUnitDist(e.target.value)}>
                {Object.keys(distanceConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button onClick={convertDistance}>Převést</Button>
          {resultDist !== null && (
            <div className="text-lg font-bold">Výsledek: {resultDist} {toUnitDist}</div>
          )}
        </CardContent>
      </Card>

      <Card className="p-6 w-96">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Převod hmotnosti</h2>
          <TextField
            type="number"
            placeholder="Zadejte hodnotu"
            value={inputValueWeight}
            onChange={(e) => setInputValueWeight(e.target.value)}
            fullWidth
          />
          <div className="flex gap-2">
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={fromUnitWeight} onChange={(e) => setFromUnitWeight(e.target.value)}>
                {Object.keys(weightConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <span className="self-center">→</span>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={toUnitWeight} onChange={(e) => setToUnitWeight(e.target.value)}>
                {Object.keys(weightConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button onClick={convertWeight}>Převést</Button>
          {resultWeight !== null && (
            <div className="text-lg font-bold">Výsledek: {resultWeight} {toUnitWeight}</div>
          )}
        </CardContent>
      </Card>

      <Card className="p-6 w-96">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Převod energie (Jouly)</h2>
          <TextField
            type="number"
            placeholder="Zadejte hodnotu"
            value={inputValueEnergy}
            onChange={(e) => setInputValueEnergy(e.target.value)}
            fullWidth
          />
          <div className="flex gap-2">
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={fromUnitEnergy} onChange={(e) => setFromUnitEnergy(e.target.value)}>
                {Object.keys(energyConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <span className="self-center">→</span>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={toUnitEnergy} onChange={(e) => setToUnitEnergy(e.target.value)}>
                {Object.keys(energyConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button onClick={convertEnergy}>Převést</Button>
          {resultEnergy !== null && (
            <div className="text-lg font-bold">Výsledek: {resultEnergy} {toUnitEnergy}</div>
          )}
        </CardContent>
      </Card>

      <Card className="p-6 w-96">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Převod rychlosti</h2>
          <TextField
            type="number"
            placeholder="Zadejte hodnotu"
            value={inputValueSpeed}
            onChange={(e) => setInputValueSpeed(e.target.value)}
            fullWidth
          />
          <div className="flex gap-2">
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={fromUnitSpeed} onChange={(e) => setFromUnitSpeed(e.target.value)}>
                {Object.keys(speedConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <span className="self-center">→</span>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={toUnitSpeed} onChange={(e) => setToUnitSpeed(e.target.value)}>
                {Object.keys(speedConversions).map((unit) => (
                  <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button onClick={convertSpeed}>Převést</Button>
          {resultSpeed !== null && (
            <div className="text-lg font-bold">Výsledek: {resultSpeed} {toUnitSpeed}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
