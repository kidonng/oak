// Copyright 2018-2022 the oak authors. All rights reserved. MIT license.

import { assertEquals } from "../test_deps.ts";
import { preferredEncodings } from "./encoding.ts";

const { test } = Deno;

test({
  name: "preferredEncodings",
  fn() {
    assertEquals(preferredEncodings("gzip, compress;q=0.2, identity;q=0.5"), [
      "gzip",
      "identity",
      "compress",
    ]);
  },
});

test({
  name: "preferredEncodings with available encodings",
  fn() {
    assertEquals(
      preferredEncodings("gzip, compress;q=0.2, identity;q=0.5", [
        "identity",
        "gzip",
      ]),
      ["gzip", "identity"],
    );
  },
});
