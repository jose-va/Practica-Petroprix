"use client";

import { Input, Select } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchComponent({searchType}: {searchType: string}){
  const { Search } = Input;

  const searchParams = useSearchParams();
  const currentInput = searchParams.get("input") || undefined;
  const currentMode = searchParams.get("mode") || undefined;

  const pathName = usePathname();
  const router = useRouter();

  function handleSearch(
    input: string,
    newMode: string | undefined = currentMode,
  ) {
    const params = new URLSearchParams(searchParams);
    if (input) {
      params.set("input", input);
    } else {
      params.delete("input");
    }
    if (newMode) {
      params.set("mode", newMode);
    } else {
      params.delete("mode");
    }
    router.replace(`${pathName}?${params.toString()}`);
  }

  const clientOptions = [
    { value: "id", label: <span>Identificador</span> },
    { value: "name", label: <span>Nombre</span> },
    { value: "email", label: <span>Email</span> },
    { value: "merchant", label: <span>ID del comerciante</span> },
  ];

  const merchantOptions = [
    { value: "id", label: <span>Identificador</span> },
    { value: "name", label: <span>Nombre</span> },
    { value: "client", label: <span>ID del cliente</span> },
  ];

  const options = searchType === "client" ? clientOptions : merchantOptions;

  return (
    <div>
      <Search
        placeholder={"Introduzca un nombre, email o identificador..."}
        onSearch={(input) => handleSearch(input)}
        defaultValue={currentInput}
      />
      <Select
        placeholder="Tipo de búsqueda"
        onChange={(value) =>
          handleSearch(searchParams.get("input") || "", value)
        }
        value={currentMode}
        options={options}
      />
    </div>
  );
}
