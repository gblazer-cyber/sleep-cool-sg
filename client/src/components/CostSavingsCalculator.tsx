/*
 * Design: Tropical Rationalist
 * Cost Savings Calculator: Interactive comparison showing aircon vs Sleep Cool costs
 * Clean, minimal design with live-updating sliders and bold savings highlights
 */
import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export function CostSavingsCalculator() {
  // State for interactive inputs
  const [hoursPerNight, setHoursPerNight] = useState(8);
  const [airconWattage, setAirconWattage] = useState(1200);
  const [electricityRate, setElectricityRate] = useState(0.3);

  // Constants
  const SLEEP_COOL_WATTAGE = 60;
  const NIGHTS_PER_MONTH = 30;
  const NIGHTS_PER_YEAR = 365;

  // Calculations
  const calculations = useMemo(() => {
    // Daily costs
    const airconKwhPerNight = (airconWattage / 1000) * hoursPerNight;
    const sleepCoolKwhPerNight = (SLEEP_COOL_WATTAGE / 1000) * hoursPerNight;

    const airconCostPerNight = airconKwhPerNight * electricityRate;
    const sleepCoolCostPerNight = sleepCoolKwhPerNight * electricityRate;

    // Monthly costs
    const airconCostPerMonth = airconCostPerNight * NIGHTS_PER_MONTH;
    const sleepCoolCostPerMonth = sleepCoolCostPerNight * NIGHTS_PER_MONTH;

    // Yearly costs
    const airconCostPerYear = airconCostPerNight * NIGHTS_PER_YEAR;
    const sleepCoolCostPerYear = sleepCoolCostPerNight * NIGHTS_PER_YEAR;

    // Savings
    const savingsPerNight = airconCostPerNight - sleepCoolCostPerNight;
    const savingsPerMonth = airconCostPerMonth - sleepCoolCostPerMonth;
    const savingsPerYear = airconCostPerYear - sleepCoolCostPerYear;

    return {
      airconCostPerNight,
      sleepCoolCostPerNight,
      airconCostPerMonth,
      sleepCoolCostPerMonth,
      airconCostPerYear,
      sleepCoolCostPerYear,
      savingsPerNight,
      savingsPerMonth,
      savingsPerYear,
    };
  }, [hoursPerNight, airconWattage, electricityRate]);

  return (
    <div className="space-y-12">
      {/* Interactive Controls */}
      <div className="space-y-8">
        {/* Hours per night */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-900">
              Hours per night
            </label>
            <span className="text-lg font-bold text-teal-700">
              {hoursPerNight}h
            </span>
          </div>
          <Slider
            value={[hoursPerNight]}
            onValueChange={(val) => setHoursPerNight(val[0])}
            min={4}
            max={10}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>4h</span>
            <span>10h</span>
          </div>
        </div>

        {/* Aircon wattage */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-900">
              Aircon power (watts)
            </label>
            <span className="text-lg font-bold text-teal-700">
              {airconWattage}W
            </span>
          </div>
          <Slider
            value={[airconWattage]}
            onValueChange={(val) => setAirconWattage(val[0])}
            min={900}
            max={1500}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>900W</span>
            <span>1500W</span>
          </div>
        </div>

        {/* Electricity rate */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-900">
              Electricity rate ($/kWh)
            </label>
            <span className="text-lg font-bold text-teal-700">
              ${electricityRate.toFixed(2)}
            </span>
          </div>
          <Slider
            value={[electricityRate]}
            onValueChange={(val) => setElectricityRate(val[0])}
            min={0.2}
            max={0.5}
            step={0.01}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>$0.20</span>
            <span>$0.50</span>
          </div>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aircon Card */}
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200/50 p-8 rounded-2xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Air Conditioner</h3>
              <span className="text-2xl">❌</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per night</p>
                <p className="text-3xl font-bold text-red-600">
                  ${calculations.airconCostPerNight.toFixed(2)}
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per month</p>
                <p className="text-2xl font-bold text-red-600">
                  ${calculations.airconCostPerMonth.toFixed(0)}
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per year</p>
                <p className="text-2xl font-bold text-red-600">
                  ${calculations.airconCostPerYear.toFixed(0)}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Cools your entire room, even when you're asleep in one corner.
            </p>
          </div>
        </Card>

        {/* Sleep Cool Card */}
        <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200/50 p-8 rounded-2xl ring-2 ring-teal-200/30">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Sleep Cool</h3>
              <span className="text-2xl">✅</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per night</p>
                <p className="text-3xl font-bold text-teal-600">
                  ${calculations.sleepCoolCostPerNight.toFixed(2)}
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per month</p>
                <p className="text-2xl font-bold text-teal-600">
                  ${calculations.sleepCoolCostPerMonth.toFixed(0)}
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-xs text-slate-600 mb-1">Per year</p>
                <p className="text-2xl font-bold text-teal-600">
                  ${calculations.sleepCoolCostPerYear.toFixed(0)}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Cools only your bed. Targeted comfort, minimal energy use.
            </p>
          </div>
        </Card>
      </div>

      {/* Savings Highlight */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white space-y-4">
        <p className="text-sm font-semibold text-teal-100 uppercase tracking-wide">
          Your Savings
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">
              ${calculations.savingsPerNight.toFixed(2)}
            </p>
            <p className="text-teal-100 text-sm">per night</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">
              ${calculations.savingsPerMonth.toFixed(0)}
            </p>
            <p className="text-teal-100 text-sm">per month</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">
              ${calculations.savingsPerYear.toFixed(0)}
            </p>
            <p className="text-teal-100 text-sm">per year</p>
          </div>
        </div>
      </div>

      {/* Supporting Copy */}
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          Why pay 20× more to cool an empty room?
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Air conditioning cools your entire room all night. Sleep Cool cools only your bed. You get the same comfort at a fraction of the cost.
        </p>
        <p className="text-xs text-slate-500 italic">
          Based on typical Singapore electricity rates and usage patterns. Actual savings may vary.
        </p>
      </div>
    </div>
  );
}
