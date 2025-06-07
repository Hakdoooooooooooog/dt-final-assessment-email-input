"use client";
import Image from "next/image";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import loadingGIF from "@/public/loading.gif";
import { emails } from "@/data/emails";

const SearchBar = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState<string[]>([]);
  const [filteredEmails, setFilteredEmails] = useState(emails);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const debouncedEmail = useDebounce(email, 500);

  const filterEmails = (query: string): string[] => {
    if (!query || query === "") return [];

    const lowerCaseQuery = query.toLowerCase();

    return emails.filter((email) =>
      email.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (filteredEmails.length > 0) {
        const selectedEmail = filteredEmails[0];
        setEmailList((prev) => [...prev, selectedEmail]);
      } else if (email) {
        setEmailList((prev) => [...prev, email]);
      }
      setEmail("");
    } else if (e.key === "Enter" && email) {
      if (filteredEmails.length > 0) {
        const selectedEmail = filteredEmails[0];
        setEmailList((prev) => [...prev, selectedEmail]);
      } else {
        setEmailList((prev) => [...prev, email]);
      }
      setEmail("");
    }
  };

  useEffect(() => {
    if (debouncedEmail) {
      const results = filterEmails(debouncedEmail);
      setFilteredEmails(results);
    } else {
      setFilteredEmails([]);
    }
  }, [debouncedEmail]);

  return (
    <div className="relative flex items-center  min-w-md max-w-xl p-2 bg-white text-gray-500 rounded-sm shadow-md">
      <ul className="w-full flex flex-wrap gap-2 list-none">
        {emailList.length > 0 &&
          emailList.map((email, index) => (
            <li
              key={index}
              className={`group flex items-center justify-center px-2 text-black bg-gray-100 hover:bg-gray-300 rounded-sm text-sm ${
                isValidEmail(email) ? "" : "bg-red-300 hover:bg-red-400"
              }`}
            >
              <span className="text-sm font-bold">{email}</span>

              {isValidEmail(email) ? (
                <button
                  onClick={() => {
                    setEmailList((prev) => prev.filter((e) => e !== email));
                  }}
                  className="ml-2 text-md cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  X
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEmailList((prev) => prev.filter((e) => e !== email));
                  }}
                  className="group ml-2 text-md cursor-pointer"
                >
                  <span className="text-white font-bold rounded-full px-1 py-1 bg-red-500 w-5 h-5 flex items-center justify-center text-xs group-hover:hidden">
                    !
                  </span>

                  <span className="text-white font-bold rounded-full px-1 py-1 bg-red-500 w-5 h-5 hidden items-center justify-center text-xs group-hover:flex ">
                    X
                  </span>
                </button>
              )}
            </li>
          ))}

        <li className="relative flex justify-end self-center flex-[1_0_auto]">
          {/*  Input field */}
          <input
            id="email-input"
            autoComplete="on"
            type="text"
            value={email}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            placeholder="Search Recepients..."
            className="w-full outline-none focus:border-none"
          />

          {loading && (
            <Image src={loadingGIF} alt="Loading..." width={24} height={24} />
          )}
        </li>
      </ul>

      <Emails
        filteredEmails={filteredEmails}
        setInputEmail={setEmail}
        setIsLoading={setLoading}
        setEmailListRecipients={setEmailList}
      />
    </div>
  );
};

export const Emails = ({
  filteredEmails,
  setInputEmail,
  setEmailListRecipients,
  setIsLoading,
}: {
  filteredEmails: string[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setInputEmail: React.Dispatch<React.SetStateAction<string>>;
  setEmailListRecipients: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [emailList, setEmailList] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEmailList(filteredEmails);
      setIsLoading(false);
    }, 1000);
  }, [filteredEmails, setEmailListRecipients, setIsLoading]);

  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const email = e.currentTarget.textContent;
    if (email) {
      setEmailList([]);
      setEmailListRecipients((prev) => [...prev, email]);
      setInputEmail("");
    }
  };

  return (
    <>
      {emailList.length > 0 && (
        <ul className="w-2/3 absolute top-full left-0 p-4 bg-white text-black shadow-lg max-h-60 overflow-y-auto">
          {emailList.map((email, index) => (
            <li
              key={index}
              onClick={handleOnClick}
              className="w-full py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
