import React, { useMemo, useState } from "react";
import FlightDetailsDynamicHeader from "../FlightDetailsDynamicHeader";
import { flightSteps } from "../FlightStep";
import { BiLock } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const SeatDetails = () => {
  const seatRows = 12;
  const seatCols = ["A", "B", "C", "D", "E", "F"];

  const occupiedSeats = [
    "1A",
    "1B",
    "2C",
    "3F",
    "4F",
    "5D",
    "6A",
    "6F",
    "7D",
    "8C",
    "9C",
    "10B",
    "10E",
    "11D",
    "12F",
  ];

  const extraLegroomSeats = ["4B", "4C", "4D", "4E", "5A", "5C", "5E", "5F"];

  const flightPrice = 856;
  const taxes = 86;
  const extraLegroomFee = 25;

  // React Hook Form setup
  const {  handleSubmit, setValue,  } = useForm();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const getSeatStatus = (seatId) => {
    if (occupiedSeats.includes(seatId)) return "occupied";
    if (selectedSeats.includes(seatId)) return "selected";
    if (extraLegroomSeats.includes(seatId)) return "extra";
    return "available";
  };

  const handleSeatClick = (seatId) => {
    const status = getSeatStatus(seatId);

    if (status === "occupied") return;

    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((seat) => seat !== seatId);
      }
      return [...prev, seatId];
    });

    setValue("selectedSeats", [...selectedSeats, seatId]); 
  };

  const extraSeatCount = selectedSeats.filter((seat) =>
    extraLegroomSeats.includes(seat),
  ).length;

  const total = useMemo(() => {
    return flightPrice + taxes + extraSeatCount * extraLegroomFee;
  }, [extraSeatCount]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Log selected seats and other data when form is submitted
    console.log("Form submitted with data:", data);
    navigate("/procced-to-payment")

  };
  return (
    <div>
      <FlightDetailsDynamicHeader
        title={"Choose Your Seats"}
        subtitle={"Select seats for both passengers - outbound and return"}
        currentStep={5}
        steps={flightSteps}
      ></FlightDetailsDynamicHeader>
      <div className="min-h-screen bg-[#f7f4ef] py-6 dynamic-paddingUP-Down flightCarHotelContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid container grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] ">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#19543f] text-xs font-semibold text-white">
                    1
                  </div>
                  <h2 className="text-[18px] font-semibold text-[#20362c]">
                    Outbound: SFO → SJO
                  </h2>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#49524d]">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded border border-[#d6d1c8] bg-white" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded bg-[#1f6b4c]" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded bg-[#e7e3dc]" />
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded border-2 border-[#f5a000] bg-[#fff4dd]" />
                    <span>Extra Legroom +$25</span>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#f1efea] p-5 text-start">
                  <div className="lg:px-40">
                    <div className="mb-4 grid grid-cols-[0px_repeat(3,1fr)_18px_repeat(3,1fr)] md:grid-cols-[30px_repeat(3,1fr)_18px_repeat(3,1fr)] gap-2 text-center text-[11px] font-medium text-[#8e938f]">
                      <div />
                      <div>A</div>
                      <div>B</div>
                      <div>C</div>
                      <div />
                      <div>D</div>
                      <div>E</div>
                      <div>F</div>
                    </div>

                    <div className="space-y-2">
                      {Array.from({ length: seatRows }, (_, rowIndex) => {
                        const row = rowIndex + 1;

                        return (
                          <div
                            key={row}
                            className="grid grid-cols-[0px_repeat(3,1fr)_18px_repeat(3,1fr)] md:grid-cols-[30px_repeat(3,1fr)_18px_repeat(3,1fr)] gap-2"
                          >
                            <div className="flex items-center justify-center text-[11px] text-[#8e938f]">
                              {row}
                            </div>

                            {seatCols.slice(0, 3).map((col) => {
                              const seatId = `${row}${col}`;
                              const status = getSeatStatus(seatId);

                              return (
                                <button
                                  key={seatId}
                                  type="button"
                                  onClick={() => handleSeatClick(seatId)}
                                  className={`h-8 md:h-14 rounded-md border transition-all ${
                                    status === "occupied"
                                      ? "cursor-not-allowed border-[#e7e3dc] bg-[#e7e3dc]"
                                      : status === "selected"
                                        ? "border-[#1f6b4c] bg-[#1f6b4c]"
                                        : status === "extra"
                                          ? "border-2 border-[#f5a000] bg-[#fff4dd] hover:bg-[#ffefc8]"
                                          : "border-[#ddd8cf] bg-white hover:border-[#1f6b4c]"
                                  }`}
                                  aria-label={`Seat ${seatId}`}
                                />
                              );
                            })}

                            <div />

                            {seatCols?.slice(3).map((col) => {
                              const seatId = `${row}${col}`;
                              const status = getSeatStatus(seatId);

                              return (
                                <button
                                  key={seatId}
                                  type="button"
                                  onClick={() => handleSeatClick(seatId)}
                                  className={`h-8 md:h-14 rounded-md border transition-all ${
                                    status === "occupied"
                                      ? "cursor-not-allowed border-[#e7e3dc] bg-[#e7e3dc]"
                                      : status === "selected"
                                        ? "border-[#1f6b4c] bg-[#1f6b4c]"
                                        : status === "extra"
                                          ? "border-2 border-[#f5a000] bg-[#fff4dd] hover:bg-[#ffefc8]"
                                          : "border-[#ddd8cf] bg-white hover:border-[#1f6b4c]"
                                  }`}
                                  aria-label={`Seat ${seatId}`}
                                />
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#f4f1eb] px-4 py-3 text-sm text-[#26372e]">
                  <span className="font-semibold">Selected seats: </span>
                  <span className="font-medium text-[#1f6b4c]">
                    {selectedSeats.length
                      ? selectedSeats.join(", ")
                      : "None selected yet"}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2d7b5d] text-xs font-semibold text-white">
                    2
                  </div>
                  <h2 className="text-[18px] font-semibold text-[#20362c]">
                    Return: SJO → SFO
                  </h2>
                </div>

                <div className="mb-4 flex items-start gap-3 rounded-2xl bg-[#f4f1eb] p-4 text-sm text-[#666d68]">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1f6b4c] text-[10px] text-white">
                    i
                  </div>
                  <p>
                    Return seat selection will be available after completing
                    outbound seat choice. You'll receive an email with the
                    return seat map.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-fit rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] lg:sticky lg:top-6">
              <h3 className="mb-4 text-[18px] font-semibold text-[#20362c]">
                Your Booking
              </h3>

              <div className="space-y-2 border-b border-[#e8e3db] pb-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#7a817c]">✈ Flight (× 2)</span>
                  <span className="font-medium text-[#26372e]">
                    ${flightPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7a817c]">Taxes & fees</span>
                  <span className="font-medium text-[#26372e]">${taxes}</span>
                </div>
                {extraSeatCount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a817c]">Extra legroom</span>
                    <span className="font-medium text-[#26372e]">
                      ${extraSeatCount * extraLegroomFee}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[16px] font-semibold text-[#20362c]">
                  Total so far
                </span>
                <span className="text-[30px] font-bold leading-none text-[#20362c]">
                  ${total}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <button className="w-full rounded-2xl bg-[#1f6b4c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#18563d] flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <BiLock className="size-5"></BiLock> Procced To Payment
                  </div>
                </button>

                <button className="w-full rounded-2xl border-2 border-[#1f6b4c] bg-white px-4 py-3 text-sm font-semibold text-[#1f6b4c] transition hover:bg-[#f6fbf8]">
                  ← Back
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-[#9aa09b]">
                You can skip seat selection and be assigned a random seat for
                free
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeatDetails;
