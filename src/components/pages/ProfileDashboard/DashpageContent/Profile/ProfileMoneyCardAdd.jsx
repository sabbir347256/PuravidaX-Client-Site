import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CreditCard, Plus, X } from 'lucide-react';
const ProfileMoneyCardAdd = () => {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, type: "Visa", last4: "4242", expiry: "12/26", status: "Primary" },
    {
      id: 2,
      type: "MasterCard",
      last4: "5555",
      expiry: "08/25",
      status: "Expired",
    },
  ]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newCard = {
    //   id: Date.now(),
      type: "Visa",
      last4: data.cardNumber.slice(-4),
      expiry: data.expiry,
      status: "Active",
    };

    setCards([...cards, newCard]);
    setShowForm(false);
    reset();
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl w-full">
      <h2 className="text-xl font-bold text-[#1B4332] mb-6">Payment Methods</h2>

      <div className="space-y-3 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#FAF9F6] rounded-2xl p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500 border border-gray-300">
                CARD
              </div>
              <div className="text-sm">
                <span className="font-bold text-[#1B4332]">
                  {card.type} ending in {card.last4}
                </span>
                <span className="text-gray-400 ml-2">
                  Expires {card.expiry} · {card.status}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeCard(card.id)}
              className="text-red-400 text-xs font-medium hover:text-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {!showForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-2 border border-gray-200 text-[#1B4332] font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all text-sm"
          >
            <Plus size={16} />
            Add New Card
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 text-[#1B4332] font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all text-sm">
            Apple Pay <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F0F4F2] border border-emerald-100 rounded-2xl p-6 animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#1B4332] flex items-center gap-2 text-sm">
              <CreditCard size={18} /> Card Information
            </h3>
            <button type="button" onClick={() => setShowForm(false)}>
              <X size={20} className="text-gray-400 hover:text-red-500" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <input
                {...register("cardNumber", { required: true, maxLength: 16 })}
                placeholder="Card Number"
                className="w-full bg-white border-none rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("expiry", { required: true })}
                placeholder="MM/YY"
                className="bg-white border-none rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
              />
              <input
                {...register("cvc", { required: true, maxLength: 3 })}
                placeholder="CVC"
                className="bg-white border-none rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-[#1B4332] outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#24634B] text-white font-bold py-3 px-8 rounded-xl text-sm hover:bg-[#1B4332] transition-colors shadow-lg shadow-emerald-900/10"
            >
              Save Card
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 text-sm font-medium hover:text-[#1B4332]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileMoneyCardAdd;
