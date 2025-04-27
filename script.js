// Password visibility toggle
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordBtn = document.querySelector('.show-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordBtn.classList.remove('fa-eye');
        showPasswordBtn.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        showPasswordBtn.classList.remove('fa-eye-slash');
        showPasswordBtn.classList.add('fa-eye');
    }
}

// Social login buttons
document.querySelectorAll('.social-login').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        showWarningMessage('Social login simulation', 'This is a simulated social login button. In a real phishing attempt, these buttons could lead to malicious websites.');
    });
});

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the entered credentials (not stored anywhere)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Show loading state
    const loginBtn = document.querySelector('.login-btn');
    const originalBtnText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    loginBtn.disabled = true;
    
    // Simulate verification delay
    setTimeout(() => {
        // Show rejection animation
        showRejectionAnimation();
        
        // Reset button state
        loginBtn.innerHTML = originalBtnText;
        loginBtn.disabled = false;
        
        // Show warning message after animation
        setTimeout(() => {
            showWarningMessage('Login attempt detected', `
                <div class="warning-content">
                    <p>This was a phishing simulation for educational purposes.</p>
                    <p>Never enter your credentials on suspicious websites!</p>
                    
                    <div class="security-checklist">
                        <h3>How to spot phishing attempts:</h3>
                        <ul>
                            <li><i class="fas fa-check-circle"></i> Check the URL carefully - it should match the official website</li>
                            <li><i class="fas fa-check-circle"></i> Look for HTTPS and the padlock icon in your browser</li>
                            <li><i class="fas fa-check-circle"></i> Be wary of urgent or threatening messages</li>
                            <li><i class="fas fa-check-circle"></i> Check for poor grammar or spelling mistakes</li>
                            <li><i class="fas fa-check-circle"></i> Verify the sender's email address</li>
                        </ul>
                    </div>
                    
                    <div class="safe-practices">
                        <h3>Safe practices to follow:</h3>
                        <ul>
                            <li><i class="fas fa-lock"></i> Use strong, unique passwords for each account</li>
                            <li><i class="fas fa-key"></i> Enable two-factor authentication when available</li>
                            <li><i class="fas fa-shield-alt"></i> Keep your software and antivirus up to date</li>
                            <li><i class="fas fa-question-circle"></i> When in doubt, contact the company directly</li>
                        </ul>
                    </div>
                    
                    <div class="red-flags">
                        <h3>Red flags in this simulation:</h3>
                        <ul>
                            <li><i class="fas fa-exclamation-triangle"></i> Generic security badges without verification</li>
                            <li><i class="fas fa-exclamation-triangle"></i> Social login buttons that don't work</li>
                            <li><i class="fas fa-exclamation-triangle"></i> Overly reassuring security messages</li>
                            <li><i class="fas fa-exclamation-triangle"></i> Placeholder trust badges</li>
                        </ul>
                    </div>
                </div>
            `);
        }, 1000);
    }, 1500);
    
    // Clear the form
    document.getElementById('loginForm').reset();
});

function showRejectionAnimation() {
    // Create rejection message
    const rejectionMessage = document.createElement('div');
    rejectionMessage.className = 'rejection-message';
    rejectionMessage.innerHTML = `
        <div class="rejection-content">
            <i class="fas fa-times-circle"></i>
            <h3>Access Denied</h3>
            <p>Invalid credentials or suspicious activity detected</p>
        </div>
    `;
    
    // Add to the page
    document.querySelector('.login-box').appendChild(rejectionMessage);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .rejection-message {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .rejection-content {
            text-align: center;
            padding: 30px;
            animation: shake 0.5s ease;
        }
        
        .rejection-content i {
            font-size: 4rem;
            color: #dc3545;
            margin-bottom: 20px;
        }
        
        .rejection-content h3 {
            color: #dc3545;
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        
        .rejection-content p {
            color: #6c757d;
            font-size: 1.1rem;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove after animation
    setTimeout(() => {
        rejectionMessage.remove();
        style.remove();
    }, 2000);
}

function showWarningMessage(title, content) {
    // Remove any existing warning message
    const existingWarning = document.querySelector('.warning-message');
    if (existingWarning) {
        existingWarning.remove();
    }
    
    // Create and show the warning message
    const warningMessage = document.createElement('div');
    warningMessage.className = 'warning-message';
    warningMessage.innerHTML = `
        <div class="warning-header">
            <i class="fas fa-shield-alt"></i>
            <h2>⚠️ ${title}</h2>
        </div>
        ${content}
    `;
    
    // Add the new warning message
    document.querySelector('.login-box').appendChild(warningMessage);
    
    // Add some CSS for the warning message
    const style = document.createElement('style');
    style.textContent = `
        .warning-message {
            background-color: #fff3cd;
            border: 1px solid #ffeeba;
            color: #856404;
            padding: 25px;
            border-radius: 8px;
            margin-top: 25px;
            animation: fadeIn 0.5s ease;
        }
        
        .warning-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        
        .warning-header h2 {
            color: #856404;
            margin: 0;
            font-size: 1.3rem;
            font-weight: 500;
        }
        
        .warning-content {
            text-align: left;
        }
        
        .warning-content p {
            margin-bottom: 18px;
            line-height: 1.5;
            font-size: 0.95rem;
        }
        
        .security-checklist, .safe-practices, .red-flags {
            background-color: rgba(255, 255, 255, 0.5);
            padding: 18px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .security-checklist h3, .safe-practices h3, .red-flags h3 {
            color: #856404;
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        .security-checklist ul, .safe-practices ul, .red-flags ul {
            list-style: none;
            padding-left: 0;
        }
        
        .security-checklist li, .safe-practices li, .red-flags li {
            margin-bottom: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 0.95rem;
            line-height: 1.4;
        }
        
        .security-checklist i, .safe-practices i {
            color: #28a745;
            font-size: 1.1rem;
            margin-top: 2px;
        }
        
        .red-flags i {
            color: #dc3545;
            font-size: 1.1rem;
            margin-top: 2px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
} 