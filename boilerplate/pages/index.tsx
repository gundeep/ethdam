import { Identity } from "@semaphore-protocol/identity";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Stepper from "@/components/stepper";
import Divider from "@/components/divider";

export default function Home() {
  const router = useRouter();
  const [_identity, setIdentity] = useState<Identity>();
  const localStorageTag = process.env.NEXT_PUBLIC_LOCAL_STORAGE_TAG!;

  useEffect(() => {
    const identityString = localStorage.getItem(localStorageTag);

    if (identityString) {
      const identity = new Identity(identityString);
      setIdentity(identity);
      console.log("Your Semaphore identity was retrieved from the browser cache 👌🏽");
    } else {
      console.log("Create your Semaphore identity 👆🏽");
    }
  }, [localStorageTag]);

  const createIdentity = async () => {
    const identity = new Identity();
    setIdentity(identity);
    localStorage.setItem(localStorageTag, identity.toString());
    console.log("Your new Semaphore identity was just created 🎉");
  };

  const renderIdentity = () => {
    return (
      <div className="bg-yellow-500 lg:w-2/5 md:w-2/4 w-full flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="bg-yellow-700 p-4">
          <h2 className="text-3xl font-bold text-white">Members</h2>
        </div>
        <div className="flex-grow p-4 bg-yellow-300">
          <button
            className="flex justify-center items-center w-auto space-x-1 verify-btn text-xl font-semibold rounded-lg bg-yellow-700 text-white px-4 py-2 hover:bg-yellow-600 transition duration-200 ease-in-out"
            onClick={createIdentity}
          >
            <span className="text-2xl">Generate a Member Profile</span>
          </button>
        </div>
        <div className="bg-yellow-700 p-4 flex items-center justify-center">
          <p className="text-2xl text-white">Member Credentials</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="overflow-auto border-2 p-7 border-slate-300 space-y-3 bg-blue-100 rounded-lg shadow-lg">
            <div className="flex space-x-2">
              <div className="text-lg font-bold text-blue-700">Trapdoor:</div>
              <div className="text-lg text-blue-600">{_identity?.trapdoor.toString()}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-lg font-bold text-blue-700">Nullifier:</div>
              <div className="text-lg text-blue-600">{_identity?.nullifier.toString()}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-lg font-bold text-blue-700">Commitment:</div>
              <div className="text-lg text-blue-600">{_identity?.commitment.toString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-slate-700">Members</h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="lg:w-2/5 md:w-2/4 w-full bg-blue-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Members can create their anonymous identity (using Semaphore) here. Identity has three components:
          </h2>
          <ol className="list-decimal pl-4 mt-5 space-y-3 text-lg text-blue-600">
            <li>Trapdoor: private, known only by user</li>
            <li>Nullifier: private, known only by user</li>
            <li>Commitment: public</li>
          </ol>
          <Divider />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        {_identity ? (
          renderIdentity()
        ) : (
          <button
            className="flex justify-center items-center w-auto space-x-3 verify-btn text-lg font-medium rounded-md px-5 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-slate-100"
            onClick={createIdentity}
          >
            Create identity
          </button>
        )}
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="lg:w-2/5 md:w-2/4 w-full">
          <Stepper
            step={1}
            onNextClick={_identity && (() => router.push("/groups"))}
          />
        </div>
      </div>
    </div>
  );
}