import './Dropdown.css';

export function Dropdown()
{

    return ( 
        <div class="list-choice">
        <div class="list-choice-title">Player</div>
        <div class="list-choice-objects">
            <label>
            <input type="radio" name="month"/>                         <span>TheBigWunk</span>
            </label>
            <label>
            <input type="radio" name="month"/>                         <span>TheTub1con</span>
            </label>
        </div>
        </div>
    );
}

export default Dropdown