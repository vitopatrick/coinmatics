import React from "react";
import Container from "../../shared/container/Container";
import * as Md from "react-icons/md";

const ContactUs = () => {
  return (
    <section className=" bg-[#0c1839] text-white">
      <Container>
        <div className="flex flex-col items-center justify-center py-12 font-header">
          <h4 className="text-5xl font-bold my-12">Contacts</h4>
          <div className="mt-10">
            <Md.MdLocationPin className="text-teal-500 text-5xl" />
          </div>
          <h4 className="my-3">Copytrading Solutions Limited</h4>
          <p className="md:w-[30%] mx-auto text-center text-teal-500">
            Wickhams Cay II, Road Town, Tortola, VG1110, British Virgin Islands
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
