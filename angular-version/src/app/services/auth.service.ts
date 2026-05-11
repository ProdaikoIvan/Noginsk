import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  username: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null>;

  private authListeners: (() => void)[] = [];

  constructor(private router: Router) {
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        this.currentUserSubject.next(user);
      } catch {
        localStorage.removeItem('user');
      }
    }
  }

  private notifyAuthChange(): void {
    this.authListeners.forEach(listener => listener());
  }

  public addAuthListener(listener: () => void): () => void {
    this.authListeners.push(listener);
    return () => {
      const index = this.authListeners.indexOf(listener);
      if (index > -1) {
        this.authListeners.splice(index, 1);
      }
    };
  }

  login(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!username || !password) {
          reject(new Error('Username and password are required'));
          return;
        }

        const user: User = {
          username,
          email: `${username.toLowerCase()}@example.com`
        };

        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.notifyAuthChange();
        resolve(user);
      }, 1000);
    });
  }

  register(username: string, email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!username || !email || !password) {
          reject(new Error('All fields are required'));
          return;
        }

        const user: User = { username, email };

        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.notifyAuthChange();
        resolve(user);
      }, 1000);
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
        this.notifyAuthChange();
        resolve();
      }, 500);
    });
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
