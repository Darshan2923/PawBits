import React from 'react';
import '../styles/PetBreedQuestionnaire.css'
import PageHeader from './PageHeader';
import Footer from './Footer';

const PetBreedQuestionnaire = () => {
    return (
        <>
            <PageHeader title="Find your pet" para="Get recommendations on preferred pet based on your lifestyle" />
            <div id="questionnaire">
                <h1 className='pet-header'>Pet Breed Questionnaire</h1>
                <form className='petForm'>
                    <label htmlFor="petType" className='petLabel'>Pet Type:</label>
                    <select id="petType" name="petType" className='petChoice'>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="livingSpace" className='petLabel'>Living Space:</label>
                    <select id="livingSpace" name="livingSpace" className='petChoice'>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="familyMembers" className='petLabel'>Number of Children:</label>
                    <input type="number" className='petInput' id="familyMembers" name="familyMembers" min="0" max="10" step="1" />

                    <label htmlFor="otherPets" className='petLabel'>Other Pets in the Household:</label>
                    <select id="otherPets" name="otherPets" className='petChoice'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label htmlFor="allergies" className='petLabel'>Any Pet Allergies:</label>
                    <select id="allergies" name="allergies" className='petChoice'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label htmlFor="activityLevel" className='petLabel'>Activity Level:</label>
                    <select id="activityLevel" name="activityLevel" className='petChoice'>
                        <option value="active">Active</option>
                        <option value="somewhat-active">Somewhat Active</option>
                        <option value="sedentary">Sedentary</option>
                    </select>

                    <label htmlFor="dailySchedule" className='petLabel'>Typical Daily Schedule:</label>
                    <input type="text" className='petInput' id="dailySchedule" name="dailySchedule" />

                    <label htmlFor="groomingTolerance" className='petLabel'>Grooming Tolerance:</label>
                    <select id="groomingTolerance" name="groomingTolerance" className='petChoice'>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>

                    <label htmlFor="temperamentPreference" className='petLabel'>Temperament Preference:</label>
                    <select id="temperamentPreference" name="temperamentPreference" className='petChoice'>
                        <option value="friendly">Friendly</option>
                        <option value="independent">Independent</option>
                    </select>

                    <label htmlFor="energyLevel" className='petLabel'>Energy Level:</label>
                    <select id="energyLevel" name="energyLevel" className='petChoice'>
                        <option value="high-energy">High-Energy</option>
                        <option value="low-energy">Low-Energy</option>
                    </select>

                    <label htmlFor="noiseTolerance" className='petLabel'>Noise Tolerance:</label>
                    <select id="noiseTolerance" name="noiseTolerance" className='petChoice'>
                        <option value="high-tolerance">High Tolerance</option>
                        <option value="moderate-tolerance">Moderate Tolerance</option>
                        <option value="low-tolerance">Low Tolerance</option>
                    </select>

                    <label htmlFor="lifestyleInterests" className='petLabel'>Hobbies and Interests:</label>
                    <input type="text" className='petInput' id="lifestyleInterests" name="lifestyleInterests" />

                    <label htmlFor="healthCommitment" className='petLabel'>Commitment to Pet's Health:</label>
                    <input type="text" className='petInput' id="healthCommitment" name="healthCommitment" />

                    <label htmlFor="sizePreference" className='petLabel'>Size Preference:</label>
                    <select id="sizePreference" name="sizePreference" className='petChoice'>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <label htmlFor="breedPreferences" className='petLabel'>Any Specific Breed Preferences:</label>
                    <input type="text" className='petInput' id="breedPreferences" name="breedPreferences" />

                    <label htmlFor="climateSuitability" className='petLabel'>Suitable for Your Region:</label>
                    <select id="climateSuitability" name="climateSuitability" className='petChoice'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <button type="submit" className='recommend'>Get Recommendations</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default PetBreedQuestionnaire;
