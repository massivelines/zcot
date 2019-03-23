import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import SectionContainer from '../components/SectionContainer/index';

import { EventConsumer } from '../components/EventProvider/EventProvider';

const googleInputMembership = [
  {
    title: 'Membership Type',
    name: 'entry.840231630',
    type: 'radio',
    options: [
      {
        title: 'Self $36',
        value: 'Self',
      },
      {
        title: 'Family $41',
        value: 'Family',
      },
      {
        title: 'Associate $25 (non-Z-Car owner)',
        value: 'Associate',
      },
    ],
    required: true,
  },
  {
    title: 'Membership Status',
    name: 'entry.257605944',
    type: 'radio',
    options: [
      {
        title: 'New Membership',
        value: 'New',
      },
      {
        title: 'Renew Membership',
        value: 'Renew',
      },
    ],
    required: true,
  },
];

const googleInputsContact = [
  {
    title: 'First Name',
    name: 'entry.1806594759',
    type: 'text',
    required: true,
  },
  {
    title: 'Last Name',
    name: 'entry.88846228',
    type: 'text',
    required: true,
  },
  {
    title: 'Street Address',
    name: 'entry.1899932204',
    type: 'text',
  },
  {
    title: 'City',
    name: 'entry.1130305656',
    type: 'text',
  },
  {
    title: 'State',
    name: 'entry.640210087',
    type: 'text',
  },
  {
    title: 'Zip Code',
    name: 'entry.774049435',
    type: 'text',
  },
  {
    title: 'Email',
    name: 'entry.99014249',
    type: 'text',
    required: true,
  },
  {
    title: 'Birthday',
    name: 'entry.1321310536',
    type: 'date',
  },
  {
    title: 'Phone Number',
    name: 'entry.1789688698',
    type: 'text',
  },
  {
    title: 'Occupation',
    name: 'entry.1201955728',
    type: 'text',
  },
];

const googleInputsCar1 = [
  {
    title: 'Make',
    name: 'entry.279166700',
    type: 'text',
  },
  {
    title: 'Model',
    name: 'entry.359375877',
    type: 'text',
  },
  {
    title: 'Year',
    name: 'entry.743126170',
    type: 'text',
  },
  {
    title: 'Color',
    name: 'entry.217632367',
    type: 'text',
  },
  {
    title: 'Serial Number',
    name: 'entry.2038279329',
    type: 'text',
  },
  {
    title: 'License Plate Number',
    name: 'entry.1508396615',
    type: 'text',
  },
];

const googleInputsCar2 = [
  {
    title: 'Make',
    name: 'entry.927351592',
    type: 'text',
  },
  {
    title: 'Model',
    name: 'entry.1316843221',
    type: 'text',
  },
  {
    title: 'Year',
    name: 'entry.584700616',
    type: 'text',
  },
  {
    title: 'Color',
    name: 'entry.1296224921',
    type: 'text',
  },
  {
    title: 'Serial Number',
    name: 'entry.2037903114',
    type: 'text',
  },
  {
    title: 'License Plate Number',
    name: 'entry.1529214365',
    type: 'text',
  },
];
const googleInputsOther = [
  {
    title: 'Additional cars and other notes',
    name: 'entry.983465645',
    type: 'area',
  },
  {
    title: 'Interested In',
    name: 'entry.701627244_sentinel',
    type: 'checkbox',
    options: [
      { title: 'Tech Help', name: 'entry.701627244' },
      { title: 'Car Shows', name: 'entry.701627244' },
      { title: 'Track Events', name: 'entry.701627244' },
      { title: 'Autocross', name: 'entry.701627244' },
      { title: 'Cruises', name: 'entry.701627244' },
    ],
  },
];

const InputType = ({ inputData }) => {
  let buildInput = null;

  if (inputData.type == 'text') {
    buildInput = (
      <label>
        <span className="input-title">{inputData.title}</span>
        <input type="text" name={inputData.name} />
      </label>
    );
  } else if (inputData.type == 'radio') {
    buildInput = (
      <div className="radio-container">
        <span className="input-title">{inputData.title}</span>
        {inputData.options.map((mData) => (
          <div className="radio-item">
            <label>
              <input
                type="radio"
                id={mData.value}
                name={inputData.name}
                value={mData.value}
              />
              <span className="radio-title">{mData.title}</span>
            </label>
          </div>
        ))}
      </div>
    );
  } else if (inputData.type == 'date') {
    buildInput = (
      <label>
        <span className="input-title">{inputData.title}</span>
        <input type="date" name={inputData.name} />
      </label>
    );
  } else if (inputData.type == 'area') {
    buildInput = (
      <label className="textarea-label">
        <span className="input-title">{inputData.title}</span>
        <textarea name={inputData.name} />
      </label>
    );
  } else if (inputData.type == 'checkbox') {
    buildInput = (
      <div className="checkbox-container">
        <span className="input-title">{inputData.title}</span>
        {inputData.options.map((mData) => (
          <label>
            <input type="checkbox" name={mData.name} value={mData.title} />
            <span className="checkbox-title">{mData.title}</span>
          </label>
        ))}
      </div>
    );
  }

  return <div className="input-item-container">{buildInput}</div>;
};

class Membership extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addCar: false,
    };
  }

  render() {
    return (
      <>
        {/* Layout Component injected by plugin */}
        <Header pageTitle="Membership" />
        <SectionContainer title="Details" addClassName="membership-details">
          <div>
            <div>Membership</div>
          </div>
        </SectionContainer>

        <SectionContainer title="Form" addClassName="membership-form">
          <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeKKSbtlY3zyLUt589cK-HnOHRryQ-jDQMA8uTVKiGX4Cs8Bw/formResponse">
            {/* Membership Type */}
            <div className="form-section membership-type">
              <div className="section-title">Membership</div>
              {googleInputMembership.map((inputData) => {
                return <InputType inputData={inputData} />;
              })}
            </div>

            {/* Contact Info */}
            <div className="form-section contact">
              <div className="membership-helper">
                If renewing just enter name, email address, and any changed
                information
              </div>
              <div className="section-title">Contact</div>
              {googleInputsContact.map((inputData) => {
                return <InputType inputData={inputData} />;
              })}
            </div>

            {/* Car 1 Details */}
            <div className="form-section car-details">
              <div className="section-title">Car Details</div>
              {googleInputsCar1.map((inputData) => {
                return <InputType inputData={inputData} />;
              })}
            </div>

            {/* Car 2 Details */}
            <div className="form-section car-details">
              {this.state.addCar ? (
                <>
                  <div className="section-title">Car Details</div>
                  {googleInputsCar2.map((inputData) => {
                    return <InputType inputData={inputData} />;
                  })}
                </>
              ) : (
                <div className="add-car-button">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ addCar: true });
                    }}
                  >
                    Add Another Car
                  </button>
                </div>
              )}
            </div>

            {/* Other Info */}
            <div className="form-section other">
              <div className="section-title">Other Information</div>
              {googleInputsOther.map((inputData) => {
                return <InputType inputData={inputData} />;
              })}
            </div>

            <div className="form-section submit-button-container">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </SectionContainer>
      </>
    );
  }
}

export default Membership;
